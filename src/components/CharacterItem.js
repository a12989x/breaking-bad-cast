import React from 'react';

const CharacterItem = ({
    img,
    name,
    portrayed,
    nickname,
    birthday,
    status,
}) => {
    return (
        <div className="character">
            <div className="character__inner">
                <div className="character__front">
                    <img src={img} alt="" className="character__image" />
                </div>
                <div className="character__back">
                    <h2 className="character__name">{name}</h2>
                    <ul>
                        <li>
                            <b>Actor Name: </b>
                            {portrayed}
                        </li>
                        <li>
                            <b>Nickname: </b>
                            {nickname}
                        </li>
                        <li>
                            <b>Birthday: </b>
                            {birthday}
                        </li>
                        <li>
                            <b>Status: </b>
                            {status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;
