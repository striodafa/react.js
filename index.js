import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import Table from './Table';
import Formulir from './Formulir';
import Hargabuku from './Hargabuku';
import Tablebuku from './Tablebuku';


export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      namaPeminjam: '',
      namaBuku: '',
      tanggalKeluar: '0',
      tanggalMasuk: '',
      id: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === '') {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk


          },

        ],
      });
    } else {
      const updatedBooks = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku
        });

      this.setState({
        bukus: [
          ...updatedBooks,
          {
            id: this.state.bukus.length + 1,
            namaPeminjam: this.state.namaPeminjam,
            namaBuku: this.state.namaBuku,
            tanggalKeluar: this.state.tanggalKeluar,
            tanggalMasuk: this.state.tanggalMasuk
          },
        ],
      });
    }
    this.setState({
      namaPeminjam: '',
      namaBuku: '',
      tanggalKeluar: '',
      tanggalMasuk: '',
      id: '',
    });
  };

  editData = (id) => {
    console.log("id buku", id)
    const updatedBooks = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku
      });

    this.setState({
      namaPeminjam: updatedBooks[0].namaPeminjam,
      namaBuku: updatedBooks[0].namaBuku,
      tanggalKeluar: updatedBooks[0].tanggalKeluar,
      tanggalMasuk: updatedBooks[0].tanggalMasuk,
      id: updatedBooks[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku
      })

    this.setState({
      bukus: bukuBaru
    })
  }




  
  render() {
    return (
      <div>
        <NavbarComponent />   
        <div  style={{backgroundColor: 'grey', padding:"50px"}} className='container'>
          <Table bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <br>
        </br>
        <div  style={{backgroundColor: 'grey', padding:"50px"}} className='container'>
          <Tablebuku bukus={this.state.bukus} editData={this.editData} hapusData={this.hapusData} />
          <Hargabuku
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}