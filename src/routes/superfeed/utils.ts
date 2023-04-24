import type { TThreeColPosition, TTwoColPosition } from '$lib/components/superfeed/superfeed.types';

let threeColPosition: TThreeColPosition[] = ['initial'];
export const setThreeColPosition = (): TThreeColPosition => {
	switch (threeColPosition[threeColPosition.length - 1]) {
		case 'initial':
			threeColPosition.push('center');
			break;
		case 'center':
			let centerOptions: TThreeColPosition[] = ['left', 'right'];
			threeColPosition.push(centerOptions[Math.floor(Math.random() * 2)]);
			break;
		case 'left':
			// if the one before  was 'center', do right
			if (threeColPosition[threeColPosition.length - 2] === 'center') {
				threeColPosition.push('right');
				break;
			} else {
				// if the one before was 'right', do center or right
				let leftOptions: TThreeColPosition[] = ['center', 'right'];
				threeColPosition.push(leftOptions[Math.floor(Math.random() * 2)]);
				break;
			}
		case 'right':
			// if the one before  was 'center', do left
			if (threeColPosition[threeColPosition.length - 2] === 'center') {
				threeColPosition.push('left');
				break;
			} else {
				// if the one before was 'left', do center or left
				let leftOptions: TThreeColPosition[] = ['center', 'left'];
				threeColPosition.push(leftOptions[Math.floor(Math.random() * 2)]);
				break;
			}
	}
	return threeColPosition[threeColPosition.length - 1];
};

let twoColPosition: TTwoColPosition = 'right';
export const setTwoColPosition = (): TTwoColPosition => {
	switch (twoColPosition) {
		case 'left':
			twoColPosition = 'right';
			return twoColPosition;
		case 'right':
			twoColPosition = 'left';
			return twoColPosition;
	}
};

const minScrollSpeed:number = 1
const maxScrollSpeed:number = 4
let lastScrollSpeed:number = 1

export const setFeedItemScrollSpeed = (): number => {

    const calculateScrollSpeed = (): number => {
        return Math.floor(Math.random() * maxScrollSpeed) + 1
    }

    let newScrollSpeed = calculateScrollSpeed()
    while (lastScrollSpeed === newScrollSpeed){
        newScrollSpeed = calculateScrollSpeed()
    }
    lastScrollSpeed = newScrollSpeed
    console.log(`scrollspeed: ${newScrollSpeed}`)
    return newScrollSpeed
    
}