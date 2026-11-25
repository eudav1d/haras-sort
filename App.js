import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    // estado inicial da tela
    this.state = {
      texto: 'Clique no botão para sortear um cavalo',
      img: require('./assets/inicial.png'),
      ultimo: -1
    };

    // bind das funcoes pra usar o this
    this.sortear = this.sortear.bind(this);
    this.limpar = this.limpar.bind(this);

    // array com os 8 cavalos e a img de cada um
    this.cavalos = [
      {
        nome: 'Apollo Dash Roxão - Alazão (Puxada)',
        foto: require('./assets/cavalo1.png')
      },
      {
        nome: 'Barão Silver Ease - Baio Amarilho (Esteira)',
        foto: require('./assets/cavalo2.png')
      },
      {
        nome: 'Thor Eternal Shady - Castanho (Puxada)',
        foto: require('./assets/cavalo3.png')
      },
      {
        nome: 'King Royal Peppy - Tordilho (Esteira)',
        foto: require('./assets/cavalo4.png')
      },
      {
        nome: 'Zeus Doc Jay - Gateado (Puxada)',
        foto: require('./assets/cavalo5.png')
      },
      {
        nome: 'Valente Streak Jet - Zaino (Puxada)',
        foto: require('./assets/cavalo6.png')
      },
      {
        nome: 'Duque Gold Leo - Palomino (Esteira)',
        foto: require('./assets/cavalo7.png')
      },
      {
        nome: 'Titã West Oak - Rosilho (Puxada)',
        foto: require('./assets/cavalo8.png')
      }
    ];
  }

  // gera um num aleatorio sem repetir o anterior e atualiza o state
  sortear() {
    let num = Math.floor(Math.random() * this.cavalos.length);

    while (num === this.state.ultimo) {
      num = Math.floor(Math.random() * this.cavalos.length);
    }

    this.setState({
      texto: this.cavalos[num].nome,
      img: this.cavalos[num].foto,
      ultimo: num
    });
  }

  // volta pro estado inicial
  limpar() {
    this.setState({
      texto: 'Clique no botão para sortear um cavalo',
      img: require('./assets/inicial.png'),
      ultimo: -1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Haras Sort</Text>

        <Image
          source={this.state.img}
          style={styles.imagem}
        />

        <Text style={styles.textoResultado}>
          {this.state.texto}
        </Text>

        <TouchableOpacity style={styles.btn} onPress={this.sortear}>
          <Text style={styles.btnTexto}>Sortear Cavalo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLimpar} onPress={this.limpar}>
          <Text style={styles.btnLimparTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 25
  },
  imagem: {
    width: 230,
    height: 230,
    borderRadius: 12,
    marginBottom: 25
  },
  textoResultado: {
    fontSize: 18,
    color: '#dddddd',
    textAlign: 'center',
    marginBottom: 30
  },
  btn: {
    width: 220,
    height: 48,
    backgroundColor: '#d47a10',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  btnTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnLimpar: {
    width: 220,
    height: 44,
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLimparTexto: {
    color: '#aaaaaa',
    fontSize: 15
  }
});

export default App;