from http.server import HTTPServer, SimpleHTTPRequestHandler

class CustomHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"POST request received")

if __name__ == "__main__":
    PORT = 8000
    server = HTTPServer(("", PORT), CustomHandler)
    print(f"Serving on port {PORT}")
    server.serve_forever()
