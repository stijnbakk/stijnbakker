import { data } from '../../../routes/experiments/grid-spacing/data';

export type TNotionDbMultiSelect = Array<string> | undefined;
export type TNotionDbFiles = { url: string; fileName: string }[] | undefined;
export type TNotionDbTitle = string | undefined;
export type TNotionDbText = string | undefined;
export type TNotionDbSelect = Array<string> | undefined;
export type TNotionDbDate = Date | undefined;
export type TNotionDbUrl = string | undefined;

export const parseNotionDbSelect = (data: any): TNotionDbSelect => {
	try {
		return data.select.name ? data.select.name : undefined;
	} catch {
		return undefined;
	}
};

export const parseNotionDbMultiSelect = (data: any): TNotionDbMultiSelect => {
	try {
		if (!data || !data.multi_select || !Array.isArray(data.multi_select)) {
			return undefined;
		}

		return data.multi_select.map((item: any) => item.name);
	} catch {
		return undefined;
	}
};

export const parseNotionDbTitle = (data: any): TNotionDbTitle => {
	try {
		// TODO: add html parsing of urls
		return data.title.map((item: any) => item.plain_text).join('');
	} catch {
		return undefined;
	}
};

export const parseNotionDbText = (data: any): TNotionDbText => {
	try {
		// TODO: add html parsing
		return data.rich_text.map((item: any) => item.plain_text).join('');
	} catch {
		return undefined;
	}
};

export const parseNotionDbUrl = (data: any): TNotionDbUrl => {
	try {
		return data.url ? data.url : undefined;
	} catch {
		return undefined;
	}
};

export const parseNotionDbFiles = (data: any): TNotionDbFiles | undefined => {
	console.log("parseNotionDbFiles", data);
  
	try {
	  if (data.files && Array.isArray(data.files)) {
		const files = data.files.map((file: any) => {
		  if (file.type === 'file' && file.file && file.file.url) {
			return {
			  url: file.file.url,
			  fileName: file.name
			};
		  } else if (file.type === 'external' && file.name) {
			return {
			  url: file.name,
			  fileName: ''
			};
		  }
		  return null;
		});
  
		// Filter out any null values in case of invalid file objects
		// const filteredFiles = files.filter(file => file !== null);
  
		// return filteredFiles;
		return files
	  }
	} catch {
	  // Catch any errors during parsing and return undefined
	  return undefined;
	}
  };

export const parseNotionDbDate = (data: any): TNotionDbDate => {
	try {
        return new Date(data.formula.date.start)
    }
    catch {
        return undefined;
    }
}
