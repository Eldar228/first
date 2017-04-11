import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/getEvents';

//TODO : make the function "more" random
const getRandomEmoji = () => {
    let emojis = [
        '⚡',
        '🔪',
        '🔫',
        '💣',
        '🔨',
        '❌',
        '💩',
        '😵',
        '🆘',
        '💥',
        '✂',
        '💢',
        '⛔',
        '🚷',
        '💀',
        '☠️',
        '🌵',
        '⚰️',
        '🤺',
        '👊🏻',
        '🦅',
        '🐉',
        '🔥',
        '☄️',
        '🍌',
        '🏹',
        '🥊',
        '🤼‍',
        '⚓️',
        '🛠',
        '⛏',
        '🗡',
        '💊'
    ];
    return <h2>{emojis[Math.floor(Math.random() * emojis.length)]}</h2>
}

class Murder extends React.Component {
    componentWillMount() {
        this.props.actions.getEvents();
    }

    render() {
        return (

                <div className="">
                    <table style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                        <tbody>
                            <tr>

                                <td>{this.props.events.killer}</td>
                                <td>   {getRandomEmoji()}   </td>
                                <td>{this.props.events.victim}</td>
                            </tr>
                        </tbody>
                  </table>

                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Murder);
