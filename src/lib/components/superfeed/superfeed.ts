import {
	parseNotionDbDate,
	parseNotionDbFiles,
	parseNotionDbMultiSelect,
	parseNotionDbSelect,
	parseNotionDbText,
	parseNotionDbTitle,
	parseNotionDbUrl
} from '$lib/utils/notion/parseDbPageProperties';
import type { TParsedSuperfeedItem } from './types';

const parseSuperfeedQueryResult = (pageObject: any): TParsedSuperfeedItem => {
	const queryResultPageProperties = pageObject.properties;

	try {
		return {
			type: parseNotionDbSelect(queryResultPageProperties.Type),
			topic: parseNotionDbMultiSelect(queryResultPageProperties.Topic),
			name: parseNotionDbTitle(queryResultPageProperties.Name),
			note: parseNotionDbText(queryResultPageProperties.Note),
			sources: parseNotionDbMultiSelect(queryResultPageProperties.Sources),
			url: parseNotionDbUrl(queryResultPageProperties.URL),
			image: parseNotionDbFiles(queryResultPageProperties.Image),
			attributes: parseNotionDbMultiSelect(queryResultPageProperties.Attributes),
			tags: parseNotionDbMultiSelect(queryResultPageProperties.Tags),
			date: parseNotionDbDate(queryResultPageProperties.Date_sort)
		};
	} catch {
		return undefined
	}
};

export const parseSuperfeedQueryResults = (
	results: Array<any>
): Array<TParsedSuperfeedItem> | undefined => {
	try {
		return results.map(parseSuperfeedQueryResult);
	} catch {
		return undefined;
	}
};
