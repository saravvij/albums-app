import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Header from './Header';

export default class AlbumList extends Component {

    constructor(props) {
        super(props);
        this.state = { albums: [] };
        this.renderAlbums = this.renderAlbums.bind(this);
        this.fetchAlbums = this.fetchAlbums.bind(this);
    }
    
    componentWillMount() {
        this.fetchAlbums();
    }

    fetchAlbums() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(resp => this.setState({ albums: resp.data }))
        .catch(err => console.error(err));
    }
      
    renderAlbums(albums) {
        if (!albums || albums === null) {
            return <Text />;
        }
            
        const albumList = albums.map(album => <AlbumDetail album={album} />);
        return albumList;
    }

    render() {
        return (
            <View>
                <Header headerText={'Albums'} />
                {this.renderAlbums(this.state.albums)}
            </View>
        );
    }
}
