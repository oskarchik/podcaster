import { Link } from 'react-router-dom';
import { StyledTable } from './Table.styled';
import { millisToDuration } from '../../utils/millisToDuration';

export const Table = ({ podcastId, episodes }) => {
	return (
		<StyledTable className='table'>
			<thead className='table-head'>
				<tr className='head-row'>
					<th className='cell'>Title</th>
					<th className='cell'>Date</th>
					<th className='cell'>Duration</th>
				</tr>
			</thead>
			<tbody className='table-body'>
				{episodes.results?.slice(1).map((episode) => {
					return (
						<tr key={episode.episodeGuid}>
							<td className='cell'>
								<Link
									to={`/podcast/${podcastId}/episode/${episode.trackId}`}
									key={episode.episodeGuid}
									state={episode}
									className='link'
								>
									{episode.trackName}
								</Link>
							</td>
							<td className='cell'>{new Date(episode.releaseDate)?.toLocaleDateString('en-GB')}</td>
							<td className='cell'>{millisToDuration(episode.trackTimeMillis)}</td>
						</tr>
					);
				})}
			</tbody>
		</StyledTable>
	);
};
