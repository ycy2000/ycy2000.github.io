import tkinter as tk
from tkinter import filedialog, messagebox
import time

SAVE_INTERVAL = 3000  # 3초마다 자동 저장 (밀리초 단위)
file_path = None

def choose_file():
    """저장할 파일 경로 선택"""
    global file_path
    file_path = filedialog.asksaveasfilename(
        defaultextension=".txt",
        filetypes=[("Text Files", "*.txt"), ("All Files", "*.*")]
    )
    if file_path:
        status_label.config(text=f"저장 경로 설정됨: {file_path}")
    else:
        status_label.config(text="저장 경로를 설정하지 않았습니다.")

def save_now():
    """즉시 수동 저장"""
    global file_path
    if not file_path:
        messagebox.showwarning("경고", "저장 경로를 먼저 지정하세요.")
        return
    text_content = text_area.get("1.0", tk.END)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(text_content)
    status_label.config(text=f"수동 저장됨: {time.strftime('%H:%M:%S')}")
    messagebox.showinfo("저장 완료", f"파일이 저장되었습니다:\n{file_path}")

def auto_save():
    """자동 저장"""
    if file_path:
        text_content = text_area.get("1.0", tk.END)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(text_content)
        status_label.config(text=f"자동 저장됨: {time.strftime('%H:%M:%S')}")
    root.after(SAVE_INTERVAL, auto_save)  # 주기적으로 실행

# GUI 기본 설정
root = tk.Tk()
root.title("자동저장 메모장")
root.geometry("500x400")

# 메뉴바 생성
menu_bar = tk.Menu(root)

file_menu = tk.Menu(menu_bar, tearoff=0)
file_menu.add_command(label="저장 경로 지정", command=choose_file)
file_menu.add_command(label="수동 저장", command=save_now)
menu_bar.add_cascade(label="파일", menu=file_menu)

root.config(menu=menu_bar)

# 텍스트 입력창
text_area = tk.Text(root, wrap="word")
text_area.pack(expand=True, fill="both")

# 상태 표시
status_label = tk.Label(root, text="저장 경로를 먼저 지정하세요.")
status_label.pack(pady=5)

# 자동 저장 시작
root.after(SAVE_INTERVAL, auto_save)

root.mainloop()
