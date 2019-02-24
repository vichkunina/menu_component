import React from 'react'

const component1 = (
    <div>vulica Kastryčnickaja 16, Minsk</div>
)

const component2 = (
    <div>
        <p>The Rolling Scopes is a front-end conference,
            located in Minsk, Belarus.</p>
        <href>Read more</href>
    </div>
)

const component3 = (
    <div>
        <img alt="" width="150" height="150 "/>
        <p>
            Follow us on Twitter or Facebook<br />to learn about the tickets first!
        </p>
    </div>
)

const component4 = (
    <div>
        <p>The Rolling Scopes Conference August 9-11, 2019
            Minsk, Belarus</p>
        <button>нажми</button>
        <href>more</href>
    </div>
)

const component5 = (
    <div>
        <href>1111</href>
        <href>2222</href>
        <href>3333</href>
        <href>4444</href>
    </div>
)


const footerComponent = (
    <div>
       Follow us<br />on social media,<br />our hashtag #rollingscopes
    </div>
)
export const hrefs = [
    {
        href: 'home',
        title: 'home',
    },
    {
        href: 'SCHEDULE',
        title: 'SCHEDULE',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    }
]

export const sections = [
    {
        title: {
            name: 'ABOUT',
            href: 'asdasdasd'
        },
        content: component1
    },
    {
        title: {
            name: 'VENUE',
        },
        content: component2
    },
    {
        title: {
            name: 'TICKETS',
            href: 'asdasdasd'
        },
        content: component3
    },
    {
        title: {
            name: 'PREVIOUS YEARS',
            href: 'asdasdasd'
        },
        content: component4
    },
    {
        title: {
            name: 'ОК16 CULTURAL HUB',
            href: 'asdasdasd'
        },
        content: component5
    },
]

export const footer = {
  content: footerComponent,
}

export const size = 'full'
// export const size = 'half'