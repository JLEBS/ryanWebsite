const indexFunction = (div) => {

    const Zindex = {
        header: '3',
        title: '2',
        wavyImage: '1',
        section: '0',
        video: '-3',
    }
    return `z-index: ${Zindex[div]}`;
}

export default indexFunction;