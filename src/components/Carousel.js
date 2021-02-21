import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import traderjoes from '../images/traderjoes.png'
import benetic from '../images/benetic.png'
import sailboat from '../images/sailboat.png'
import tarot from '../images/tarot.png'
import gol from '../images/gol.png'

import Card from '../components/Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Benetic',
                    subTitle: 'This is an application built with Gatsby, Bootstrap, and Netlify functions. I worked from professionally designed wireframes to turn this into a fully functional website.',
                    imgSrc: benetic,
                    code: 'https://github.com/jtkoch',
                    link: 'https://benetic.netlify.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Moon Travelers Tarot',
                    subTitle: 'A website for a Tarot & Oracle Practice built with React, Node, and Express JS',
                    imgSrc: tarot,
                    code: 'https://github.com/jtkoch/moon-travelers-tarot',
                    link: 'https://moon-travelers-tarot.vercel.app/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Conway\'s Game of Life',
                    subTitle: 'The iconic computer science game of cellular automaton built with React JS',
                    imgSrc: gol,
                    code: 'https://github.com/jtkoch/conways-game-of-life',
                    link: 'https://conways-game-of-life-plum.vercel.app/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Trader Joe\'s Shopping List',
                    subTitle: 'A interactive shopping list with my favorite items from TJ\'s that allows you to add items to the cart built with React and Context API',
                    imgSrc: traderjoes,
                    code: 'https://github.com/jtkoch/trader-joes-frontend',
                    link: 'https://trader-joes-frontend.vercel.app/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Away At Last',
                    subTitle: 'A website for Away At Last Travel & Tours built with HTML, CSS, JavaScript',
                    imgSrc: sailboat,
                    code: 'https://github.com/jtkoch/away-at-last',
                    link: 'https://www.awayatlasttravel.com/',
                    selected: false
                },
            ]
        }
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel