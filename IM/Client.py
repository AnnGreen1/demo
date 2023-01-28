import socket

s = socket.socket()                 # 创建TCP/IP套接字
host = socket.gethostname()         # 获取主机地址
port = 8888
nick_name = "小K"

s.connect((host, port))             # 初始化TCP服务器连接
print('Client Connected')
info = ''
while 'Quit' not in info:
    send_data = input('输入发送的内容：')
    send_data = nick_name + ": " + send_data
    s.send(send_data.encode())      # 发送TCP数据
    if 'Quit' in send_data:
        break
    info = s.recv(1024).decode()    #接收服务端数据
    print(info)

s.close()                           # 关闭Socket连接