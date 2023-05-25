import type { TNotionDbSelect, TNotionDbMultiSelect, TNotionDbTitle, TNotionDbText, TNotionDbUrl, TNotionDbFiles, TNotionDbDate  } from "$lib/utils/notion/parseDbPageProperties"

export type TParsedSuperfeedItem = {
    type: TNotionDbSelect,
    topic: TNotionDbMultiSelect,
    name: TNotionDbTitle,
    note: TNotionDbText,
    sources: TNotionDbMultiSelect,
    url: TNotionDbUrl
    image: TNotionDbFiles
    attributes: TNotionDbMultiSelect
    tags: TNotionDbMultiSelect
    date: TNotionDbDate
} | undefined
