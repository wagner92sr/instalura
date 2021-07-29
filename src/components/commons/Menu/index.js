import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';

export default function Menu(){
   const links = [
      {
         texto: 'Home',
         url: '/',
      },
      {
         texto: 'Perguntas Frequentes',
         url: '/faq',
      },
      {
         texto: 'Sobre',
         url: '/sobre',
      },
   ]
   return(
      <MenuWrapper>
         <MenuWrapper.LeftSide>
            <Logo />
         </MenuWrapper.LeftSide>
         <MenuWrapper.CentralSide>
            {links.map(function (link){
               return(
                 <li>
                    <a href={link.url}>
                       {link.texto}
                    </a>
                 </li>
               )
            })}
         </MenuWrapper.CentralSide>
         <MenuWrapper.RightSide>
            <button>
               Entrar
            </button>
            <button>
               Caadastrar
            </button>
         </MenuWrapper.RightSide>
      </MenuWrapper>
   )
}