import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {MdOutlineHome} from 'react-icons/md'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {VscSymbolArray} from 'react-icons/vsc'
import {SiPluralsight} from 'react-icons/si'
import {BiShapeTriangle, BiCube} from 'react-icons/bi'
import {RiScales3Line} from 'react-icons/ri'
import {TbStairs} from 'react-icons/tb'
import {BsDice4} from 'react-icons/bs'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Home from './home/Home';
import Phonetics from './phonetics/Index';
import Tokenizer from './tokenizer/Index';
import Plural from './plural/Index';
import Singular from './singular/Index';
import Hamming from './hamming/Index';
import JaroWinkler from './jarowinkler/Index';
import Levenshtein from './levenshtein/Index';
import DiceCoefficient from './dicecoefficient/Index';
const { Content, Footer, Sider } = Layout;
const Main = () => {
  const [collapsed, setCollapsed] = useState(false)
  const menuList = [
    {
      name: "Welcome",
      key: 0,
      icon: <MdOutlineHome style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/'
    },
    {
      name: "Phonetics",
      key: 1,
      icon: <FaAssistiveListeningSystems style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/phonetics'
    },
    {
      name: "Tokenizer",
      key: 2,
      icon: <VscSymbolArray style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/tokenizer'
    },
    {
      name: "Plural",
      key: 3,
      icon: <SiPluralsight style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/plural'
    },
    {
      name: "Singular",
      key: 4,
      icon: <BiShapeTriangle style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/singular'
    },
    {
      name: "Hamming",
      key: 5,
      icon: <BiCube style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/hamming'
    },
    {
      name: "Jaro Winkler",
      key: 6,
      icon: <RiScales3Line style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/jarowinkler'
    },
    {
      name: "Levenshtein",
      key: 7,
      icon: <TbStairs style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/levenshtein'
    },
    {
      name: "Dice Coefficien",
      key: 8,
      icon: <BsDice4 style={{fontSize: '20px', marginRight: '10px'}}/>,
      link: '/dicecoefficien'
    },
  ]
  const location = useLocation() 
  const pathName = location.pathname;
  const findKey = menuList.find(a => a.link === pathName);
  const numToString = findKey.key.toLocaleString();
  
  return (
    <>
     <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[numToString]} mode="vertical">
            {menuList.map((list) => {
              return(
            <Menu.Item className="side-item" key={list.key}>
              {collapsed ? list.icon : list.name}
              <Link to={list.link}/>
            </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
             <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/phonetics' element={<Phonetics />}/>
              <Route path='/tokenizer' element={<Tokenizer />}/>
              <Route path='/plural' element={<Plural />}/>
              <Route path='/singular' element={<Singular />}/>
              <Route path='/hamming' element={<Hamming />}/>
              <Route path='/jarowinkler' element={<JaroWinkler />}/>
              <Route path='/levenshtein' element={<Levenshtein />}/>
              <Route path='/dicecoefficien' element={<DiceCoefficient />}/>
             </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              background: '#001529',
              color: '#00739E'
            }}
          >
            Natural Language Api Docs
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default Main