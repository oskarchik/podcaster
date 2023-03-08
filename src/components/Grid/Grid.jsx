import React from 'react';
import { Tile } from '../Tile/Tile';

import { StyledGrid } from './Grid.styled';

export const Grid = ({ podcasts }) => {
	return (
		<StyledGrid>
			{podcasts &&
				podcasts?.map((podcast) => {
					return (
						<Tile podcast={podcast} key={podcast.id?.label}>
							{podcast}
						</Tile>
					);
				})}
		</StyledGrid>
	);
};
