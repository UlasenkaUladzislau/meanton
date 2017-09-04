import React from 'react';
import axios from 'axios';
import Cookie from '../../utils/cookie.js';
import defaultDictionary from '../../constants/defaultDictionary.js'
import { DICTIONARIES_URL, LOGOUT } from '../../constants/urls.js'
import DictionariesMenu from '../dictionaries/DictionariesMenu.jsx'
import DictionaryDetail from '../dictionaries/DictionaryDetail.jsx'


export default class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputWords: '',
            outputWords: '',
            dictionaries: [],
            activeDictionary: false,
        };
    }

    componentWillMount() {
        axios.get(DICTIONARIES_URL)
        .then(res => this.setState({dictionaries: res.data}))
        .catch(err => console.log(err))
    }


    createNewDictionary = () => {
        this.setState({ activeDictionary: defaultDictionary });
    };

    addWordTranslation = (translation) => {
        const activeDictionary = this.state.activeDictionary;
        activeDictionary.translations.push(translation);
        this.setState({ activeDictionary });
    };

    saveDictionary = () => {
        const cookie = new Cookie();
        const csrftoken = cookie.getCookie('csrftoken');
        const activeDictionary = this.state.activeDictionary;
        activeDictionary.translations = JSON.stringify(activeDictionary.translations);
        axios({
          method: 'post',
          url: DICTIONARIES_URL,
          headers: {"X-CSRFToken": csrftoken},
          data: { ...activeDictionary },
        })
        .then(res => {
            console.log(res.data);
            const dictionaries = this.state.dictionaries;
            dictionaries.push(res.data);
            this.setState({
                dictionaries,
                activeDictionary: false,
            })
        })
        .catch(err => console.log(err));
    };

    changeActiveDictionarySetting = (settingName, value) => {
        const activeDictionary = this.state.activeDictionary;
        activeDictionary[settingName] = value;
        this.setState({ activeDictionary });
    };

    render() {
         return (
             <div className="row">
                 <div className="col-md-3">
                     <a href={LOGOUT}>Log out</a>
                     <DictionariesMenu
                         createNewDictionary={this.createNewDictionary}
                         dictionaries={this.state.dictionaries}
                     />
                     {this.state.activeDictionary && <DictionaryDetail
                         changeActiveDictionarySetting={this.changeActiveDictionarySetting}
                         activeDictionary={this.state.activeDictionary}
                         inputWords={this.state.inputWords}
                         addWordTranslation={this.addWordTranslation}
                         outputWords={this.state.outputWords}
                         saveDictionary={this.saveDictionary}
                     />}
                 </div>
             </div>
        );
    }
}
