import React from "react";
import { Link } from 'react-router-dom'
import {FiPower} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

export default function Profile () {
    return (
        <div className="profile-containe">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new" > Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18}/>
                </button>
            </header>
        </div>
    );
}