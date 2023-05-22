function gacha(items) {
	let totalDropRate = items.reduce((a, b) => a + b.rate, 0);
	const random = Math.random() * totalDropRate;

	let itemIdx = 0;
	let rateAccumulation = 0;

	while (rateAccumulation <= random) {
		rateAccumulation += items[itemIdx].rate;
		if (rateAccumulation <= random) itemIdx++;
	}

	return items[itemIdx].data;
}