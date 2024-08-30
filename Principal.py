from flask import Flask, render_template
import os

class Portfolio:
    def __init__ (self, import_name):
        self.app = Flask(__name__)
        self.app.secret_key = os.urandom(24)
        self.paginaPrincipal()
        self.paginasProjetos()
    
    def paginaPrincipal(self):
        @self.app.route('/')
        def home():
            return render_template('index.html')

    def paginasProjetos(self):
        @self.app.route('/Site-Curriculo')
        def siteCurriculo():
            return render_template('Site-Curriculo.html')
    
    def run(self, **kwargs):
        # Método para rodar a aplicação
        self.app.run(**kwargs)

if __name__ == '__main__':
    app = Portfolio(__name__)
    app.run(debug=True)