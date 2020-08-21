


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const js = async () => {
console.log('Pythontutorials (pytutorials) version Alpha 1.1.2')
await sleep(500)
console.log('Welcome!') 
}

js()