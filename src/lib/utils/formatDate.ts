export const dateFormatLong = (date?: string | Date, time = false): string => {
	const convertedDate = date ? new Date(date) : new Date();

	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	};

	const optionsWithoutTime: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	};

	return convertedDate.toLocaleDateString('default', time ? options : optionsWithoutTime);
};
