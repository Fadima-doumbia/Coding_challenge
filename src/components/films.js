import React from 'react';
import '../style/image.css';

class Film extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            key:[],
            loading:true
        }
    }

    componentDidMount(){
        // alert("ok"); pr verifier le loading
        console.log('eeeee');
        fetch("fichier.json")
        .then((Response) => {return Response.json(); })
        .then((data) => {
            var tableau = [];

            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
                if (data[i].category_nomd){
                    console.log(data[i]);
                    tableau.push(data[i])
                }
            }
         
            this.setState({key: tableau, loading : false});
        })
        // this.setState({})
    }

    render(){
        const loading =  <h3>Chargement</h3>;
        const donnee = this.state.key.map((data, i) => {
            return (
                <div key={i} className = "objet">
                    <h1>{data.title}</h1>
                    <img src={data.images.url} alt={data.title}/>
                    <h3>{data.category_nomd}, de {data.type}, publier en {data.releaseYear}</h3>
                    <p>{data.description}</p>
                    <h3></h3>
                </div>
            )
    })
        return(
            <div className = "retour">
                <h2>Populars series</h2>
                {this.state.loading ? loading: donnee}
            </div>
        ) 
    }
}


export default Film;