import socket

host = socket.gethostname()         #获取主机地址
port = 8888                         #设置端口号
nick_name = "麦叔"

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((host, port))                # 绑定地址
s.listen(1)                         # 设置最多连接数量

sock, addr = s.accept()              # 被动接收TCP客户端连接
print('Connected')
info = sock.recv(1024).decode()     # 接收Client数据
while 'Quit' not in info:
    if info:
        print(info)
    send_data = input('输入发送内容：')
    send_data = nick_name + ": " + send_data
    sock.send(send_data.encode())   # 发送TCP数据包
    if 'Quit' in send_data:
        break
    info = sock.recv(1024).decode() # 接收Client数据

sock.close()                        # 关闭客户端Socket
s.close()                           # 关闭服务端Socket