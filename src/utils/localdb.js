import Dexie from 'dexie';

export const db = new Dexie('podcastsDataBase');

db.version(1).stores({
	podcasts: 'id, podcasts, timestamp', // Primary key and indexed props
	podcastId: 'id, data, timestamp',
});
