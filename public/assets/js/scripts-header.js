function Choice(element, options = [], obj = {}){
	const i18next = obj?.i18next;
	return new Choices(element, {
		silent: false,
		items: [],
		choices: options,
		renderChoiceLimit: -1,
		maxItemCount: -1,
		addItems: true,
		addItemFilter: null,
		removeItems: true,
		removeItemButton: !obj?.reset ? obj.reset : true,
		editItems: obj?.editItems ? obj.editItems : false,
		allowHTML: true,
		duplicateItemsAllowed: true,
		delimiter: ',',
		paste: true,
		searchEnabled: obj?.search ? obj.search : false,
		searchChoices: obj?.search ? obj.search : false,
		searchFloor: 1,
		searchResultLimit: 4,
		searchFields: ['label', 'value'],
		position: 'auto',
		resetScrollPosition: true,
		shouldSort: true,
		shouldSortItems: false,
		sorter: ()=>{},
		placeholder: true,
		placeholderValue: obj?.placeholderValue ? obj.placeholderValue : null,
		searchPlaceholderValue: "Search...",
		prependValue: null,
		appendValue: null,
		renderSelectedChoices: 'auto',
		loadingText: "Loading...",
		noResultsText: () => {
			let html = '';
			html += `<span>${i18next.t('choice.noResultsText')}</span>`;
			const choices = element.closest('.choices');
			if(choices && obj?.add_data == true){
				const search = choices.querySelector('input[type="search"]');
				if(search){
					html += '<div id="add-choice-manually" data-value="'+search.value+'">';
					html += 	'<i class="fa-solid fa-plus"></i> ' + search.value;
					html += '</div>';
				}
			}
			return html;
		},
		noChoicesText: "No choices to choose from",
		itemSelectText: '',
		uniqueItemText: "Only unique values can be added",
		customAddItemText: "Only values matching specific conditions can be added",
		addItemText: (value) => {
			return `${i18next.t('choice.addItemText')} <b>"${value}"</b>`;
		},
		maxItemText: (maxItemCount) => {
			return `${i18next.t('choice.only')} ${maxItemCount}${i18next.t('number.postfix')} ${i18next.t('choice.maxItemText')}`;
		},
		valueComparer: (value1, value2) => {
			return value1 === value2;
		},
		classNames: {
			containerOuter: 'choices',
			containerInner: 'choices__inner',
			input: 'choices__input',
			inputCloned: 'choices__input--cloned',
			list: 'choices__list',
			listItems: 'choices__list--multiple',
			listSingle: 'choices__list--single',
			listDropdown: 'choices__list--dropdown',
			item: 'choices__item',
			itemSelectable: 'choices__item--selectable',
			itemDisabled: 'choices__item--disabled',
			itemChoice: 'choices__item--choice',
			placeholder: 'choices__placeholder',
			group: 'choices__group',
			groupHeading: 'choices__heading',
			button: 'choices__button',
			activeState: 'is-active',
			focusState: 'is-focused',
			openState: 'is-open',
			disabledState: 'is-disabled',
			highlightedState: 'is-highlighted',
			selectedState: 'is-selected',
			flippedState: 'is-flipped',
			loadingState: 'is-loading',
			noResults: 'has-no-results',
			noChoices: 'has-no-choices',
			i18next: {
				searchPlaceholderValue: 'choice.searchPlaceholderValue',
				loadingText: 'choice.loadingText',
				noChoicesText: 'choice.noChoicesText',
				itemSelectText: 'choice.itemSelectText',
				uniqueItemText: 'choice.uniqueItemText',
				customAddItemText: 'choice.customAddItemText'
			}
		},
		// Choices uses the great Fuse library for searching. You
		// can find more options here: https://fusejs.io/api/options.html
		fuseOptions: {
			includeScore: true
		},
		labelId: '',
		callbackOnInit: null,
		callbackOnCreateTemplates: null
	});
}