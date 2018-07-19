import React, {Component, Fragment} from 'react'
import './App.css';
import Header from "./Header";
import Footer from "./Footer";

// const getContacts = async id =>
//     await fetch(`http://localhost:4000/${id}`, {})
//         .then(response => response.json())

class ListOfContacts extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
        };
    }

    componentDidMount() {
        fetch('http://localhost:4000')
            .then(results =>{
                return results.json();
            }).then(data => {
                let firstName = data.map((name) => {
                    return (
                        <div key={name.results}>
                            <p>{name.firstName}</p>
                        </div>
                    )
    })
    this.setState({firstName:firstName});
    console.log("state", this.state.firstName);
})
    }
    //
    // state = {
    //     contacts: {},
    //     firstName: 'Daniel'
    // }
    //
    // async componentDidMount() {
    //     try {
    //         const id = this.props.match.params.id
    //         const contacts = await getContacts(id)
    //         this.setState({ contacts })
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const data = JSON.stringify ({...this.state})
    //
    //     fetch('http://localhost:4000', {
    //         method:'get',
    //         body: data,
    //         headers: {
    //             "Content-type" : "application/json"
    //         }
    //     })
    // }


    render() {
        // const contacts = this.state.contacts
        return (
            <Fragment>
                <Header/>
                <body>
                <header className="backgroundimagesections">
                    <h1>Daniel Zimmerman</h1>
                    <h2>List of Contacts</h2>
                </header>
                    <section>
                        <h3>Testing this out</h3>
                        <h3>{this.state.firstName}</h3>
                    </section>
                <Footer/>
                </body>
            </Fragment>
        )
    }
}

export default ListOfContacts