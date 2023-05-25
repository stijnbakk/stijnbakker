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
	console.log('parseNotionDbMultiSelect:', data)
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

export const parseNotionDbFiles = (data: any): TNotionDbFiles => {
    // console.log("parseNotionDbFiles", data)
    // TODO: add support for external files
    // parseNotionDbFiles {
    //     id: 'dxUq',
    //     type: 'files',
    //     files: [
    //       {
    //         name: 'https://www.stijnbakker.com/photography/amsterdam1.jpg',
    //         type: 'external',
    //         external: [Object]
    //       }
    //     ]
    //   }
	try {
		// console.log('parseNotionDbFiles', data.files[0].file.url)
		const files = data.files.map((file: any) => ({
			url: file.file.url,
			fileName: file.name
		}));
		return files;
	} catch {
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
