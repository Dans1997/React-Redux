import React from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Button } from 'antd';

import { selectSong } from '../actions'


class SongList extends React.Component {

    renderList() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.songs}
                renderItem={song => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src="public\note.png" />}
                    title={song.title}
                    />
                    <Button type="primary" onClick={() => this.props.selectSong(song)}>Select</Button>
                </List.Item>
                )}
            />
        )
    }

    render () {
        return (
            <div>
                { this.renderList() }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
}

export default connect(mapStateToProps, { selectSong })(SongList);