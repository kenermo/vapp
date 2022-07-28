import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react'
import 'bulma/css/bulma.css'
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"

export default function Home() { 
    const [isActive, setisActive] = React.useState(false)
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  async function redeem() {
    try {
      //await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
 
  return (
    <div className={styles.container}>
     
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand"> 
        <div class="columns navbar-item">
            <div class="column is-half"><h1>VIP CLUB!!</h1> </div>
            <div class="column">{active ?"":<button onClick={connect} className="button is-primary is-medium">Connect Wallet</button>} 
            {active ? <span className="loginedusername">  {account} </span> : ''} 
            {active ?<button onClick={disconnect} className="button is-danger is-small ">Disconnect</button>:''} </div> 
        </div>
        
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}> 
      <div class="navbar-end"> 
          <a class="navbar-item is-size-5 has-text-weight-semibold">
            Home
          </a>
          <a class="navbar-item is-size-5 has-text-weight-semibold">
            My Cards
          </a> 
      </div>
      </div>
    </div>
  </nav>
  <div class="tile is-ancestor"> 
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title"> VIP CARD Day </p>
        <p class="subtitle">Members only</p>
        <div class="content">
          Coupon 80% Off
        </div>
        <p class="actionctr"> {active ? <button onClick={redeem} className="button is-warning is-normal">Redeem</button>  : <button className="button is-default">Redeem</button>}</p>
      </div>
    </article>
  </div>
</div>
    </div>
  )
}