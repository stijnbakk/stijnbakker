// GRID TYPES
export type TThreeColPosition = 'initial' | 'left' | 'center' | 'right';
export type TTwoColPosition = 'left' | 'right';

// PHOTOGRAPHY TYPES
type TOrientation = 'portrait' | 'landscape' | 'square';
export type TPhotographyAttributes = {
	src: string;
	alt: string;
	orientation: TOrientation;
};
export type TProjectAttributes = {
	src: string;
	title: string;
	href: string;
}

// SOURCE TYPES
export type TFeedSource =
	{
			componentName: 'Photography';
			componentOptions: TPhotographyAttributes;
			tag: 'photography';
			large?: boolean;
			position?: TThreeColPosition;
			fullspace?: true;
	  }
	|{
		componentName: 'Project';
		componentOptions: TProjectAttributes;
		tag: 'project' | 'concept' | 'portfolio' | 'professional project';
		large?: boolean;
		position?: TThreeColPosition;
		fullspace?: true;
  }
|
	 {
			componentName: string;
			componentOptions?: any;
			tag: string;
			large?: boolean;
			position?: TThreeColPosition;
			fullspace?: true;
	  };
