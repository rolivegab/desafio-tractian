import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [blackHeader, setBlackHeaader] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuMobile = () => {
    setMenu((main) => !main);
  };

  useEffect(() => {
    const scrollBackgroundColor = () => {
      if (window.scrollY > 10) {
        setBlackHeaader(true);
      } else {
        setBlackHeaader(false);
      }
    };

    window.addEventListener('scroll', scrollBackgroundColor);
    return () => {
      window.removeEventListener('scroll', scrollBackgroundColor);
    };
  }, []);

  return (
    <header className={blackHeader ? 'black' : ''+ ' ' + 'header'}>
      <div className="header-container">
        <nav className="menu-desktop">
          <div className="">
            <ul className="">
              <li>
                <a href="/">
                  <img className="logo" src="/img/logo-tractian.svg" alt="TRACTIAN" />
                </a>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Conheça o Produto
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/sensor-tractian">Sensor Tractian</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/plataforma">Plataforma</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/funcionalidades">Funcionalidades</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/planos">Planos</a>
                  </li>
                  {/* <li>
                                            <a href="#">Agende uma Demonstração</a>
                                        </li> */}
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Sobre Nós
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/sobre">Conheça a Tractian</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/casos-de-sucesso">Hitórias de Sucesso</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/contato">Contato</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/carreiras/quem-somos">Trabalhe Conosco</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/imprensa">Imprensa</a>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Materiais Gratuitos
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/guias">Guias</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/checklists">Checklist</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/calculadora">Calculadora ROI</a>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <a className="item-list" href="https://tractian.com/blog">Blog</a>
              </li>
              <li className="item-list">
                <a className="item-list" target="_blank" rel="noreferrer" href="https://app.tractian.com/login">Área do Cliente</a>
              </li>
              <li className="item-list">
                <a className="" href="/">
                  PT
                  <MdKeyboardArrowDown />
                </a>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/guias">PT</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/checklists">EN</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/calculadora">ES</a>
                  </li>
                  <li>
                    <a href="/">PL</a>
                  </li>

                </ul>
              </li>
              <li className="item-list btn-demonstracao">
                <a href="https://tractian.com/">Demonstração</a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="menu-mobile">
          <ul className={menu ? 'fechado' : 'aberto' + ' ' + 'alinhamento-lateral'}>
            <li>
              <a href="/">
                <img className="logo" src="/img/logo-tractian.svg" alt="TRACTIAN" />
              </a>
            </li>
            <li>
              <div role="button" tabIndex={0} className="hamburguer-menu" onClick={menuMobile}>
                <GiHamburgerMenu />
              </div>
            </li>
          </ul>
        {/* </nav>
        <nav className=""> */}
          <div className={menu ? 'aberto' : 'fechado'}>
            <ul className="topo-mobile">
              <li>
                <a href="/">
                  <img className="logo" src="https://tractian.com/images/logotractianazul.svg" alt="LOGO TRACTIAN" />
                </a>
              </li>
              <li onClick={menuMobile}>
                <GrClose style={{ cursor: 'pointer' }} color="white" />
              </li>
            </ul>
            <ul>
              <li className="item-list">
                <span className="item-list" href="/">
                  Conheça o Produto
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/sensor-tractian">Sensor Tractian</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/plataforma">Plataforma</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/funcionalidades">Funcionalidades</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/planos">Planos</a>
                  </li>
                  <li>
                    <a href="/">Agende uma Demonstração</a>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Sobre Nós
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/sobre">Conheça a Tractian</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/casos-de-sucesso">Hitórias de Sucesso</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/contato">Contato</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/carreiras/quem-somos">Trabalhe Conosco</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/imprensa">Imprensa</a>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Materiais Gratuitos
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/guias">Guias</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/checklists">Checklist</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/calculadora">Calculadora ROI</a>
                  </li>
                  <li>
                    <a href="/">ÚLTIMOS MATERIAIS</a>
                    <a href="/">Em busca do downtime zero.</a>
                    <a href="/">Guia completo Indicadores da Manutenção.</a>
                    <a href="/">Ver todos</a>

                  </li>

                </ul>
              </li>
              <li className="item-list">
                <a className="item-list" href="https://tractian.com/blog">Blog</a>
              </li>
              <li className="item-list">
                <a className="item-list" target="_blank" rel="noreferrer" href="https://app.tractian.com/login">Área do Cliente</a>
              </li>
              <li className="item-list">
                <a className="" href="/">
                  PT
                  <MdKeyboardArrowDown />
                </a>
                <ul className="list-content">
                  <li>
                    <a href="https://tractian.com/guias">PT</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/checklists">EN</a>
                  </li>
                  <li>
                    <a href="https://tractian.com/calculadora">ES</a>
                  </li>
                  <li>
                    <a href="/">PL</a>
                  </li>

                </ul>
              </li>
              <li className="item-list btn-demonstracao">
                <a href="https://tractian.com/">Demonstração</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;