import React from 'react';

const CharacterItem = ({ img, name, portrayed, nickname, birthday, status }) => {
    return (
        <div>
            <div><img src={img} alt=""/></div>
            <div><h2>{name}</h2>
                <ul>
                    <li><b>Actor Name: </b>{portrayed}</li>
                    <li><b>Nickname: </b>{nickname}</li>
                    <li><b>Birthday: </b>{birthday}</li>
                    <li><b>Status: </b>{status}</li>
                </ul>
            </div>
        </div>
    );
};

export default CharacterItem;
