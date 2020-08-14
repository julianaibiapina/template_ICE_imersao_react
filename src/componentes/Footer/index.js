import React from 'react';
import styled from 'styled-components';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo_white.png';
import Insta from '../../assets/img/instagram.svg';
import YouTube from '../../assets/img/youtube.svg';


function Footer() {
  return (
    <FooterBase>

      <div>
        <img src={Logo} alt="Logo Igreja Cristã Evangélica de Sobral" />
        
      </div>

      <div>
        <h3>Resdes Sociais</h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/icesobral/" target="_blank">
              <img src={Insta} className="icon_social" />
              <strong>Instagram</strong>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UC5TFHpho3xXDjpchvBrzEVQ" target="_blank">
              <img src={YouTube} className="icon_social" />
              <strong>YouTube</strong>
            </a>
          </li>
        
        </ul>
      </div>

      <div>
        <h3>Localização</h3>
        <div className="map"></div>
        <p>R. Sinhá Sabóia, 689 | Sobral - CE</p>

      </div>

    </FooterBase>
  );
}

export default Footer;
