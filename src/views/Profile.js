import React from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      pekerjaan: '',
      alamat: '',
      jenis: [],
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onSubmit(event) {
    const { name, pekerjaan, alamat} = this.state;
    alert(`Namaku adalah ${name}, pekerjaanku sebagai ${pekerjaan}, rumahku di ${alamat}`);
    event.preventDefault(); 
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  onCheck(event) {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: !prevState[name] }))
  }

  onPick(event) {
    let jenis = [...this.state.jenis];
    let idx = jenis.findIndex(elemen => event.target.value === elemen);
    if (idx > 0) {
        jenis = [...jenis.slice(0, idx), ...jenis.slice(idx + 1, jenis.length)]
    } else if (idx === 0) {
        jenis = [...jenis.slice(idx + 1, jenis.length)]
    } else {
        jenis.push(event.target.value)
    }
    this.setState({ jenis });
  }
  
  render() {
    const { name, pekerjaan, alamat, jenis } = this.state;
    
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={name} onChange={this.onChange} />
        </label>
        <br/>
        <label>
          Gender:
          <input name="gender" type="radio" value="laki-laki" onChange={this.onChange} /> Laki-laki
          <input name="gender" type="radio" value="perempuan" onChange={this.onChange} /> Perempuan
        </label>
        <br/>
        <label>
          Pekerjaan:
          <input name="pekerjaan" type="text" value={pekerjaan} onChange={this.onChange} />
        </label>
        <br/>
        <label>
          Address:
          <textarea name="alamat" value={alamat} onChange={this.onChange} />
        </label>
        <br/>
        <label>
          Jenis:
          <select multiple value={jenis} onChange={this.onPick}>
            <option value="Sport">Sport</option>
            <option value="Cub">Cub</option>
            <option value="Matic">Matic</option>
            <option value="Passenger Car">Passenger Car</option>
            <option value="Commercials Car">Commercials Car</option>
          </select>
        </label>
        <br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Profile;