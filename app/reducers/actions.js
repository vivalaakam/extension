import R from 'ramda';

const Merge = (state, data) => {
    return R.pipe(
        R.toPairs,
        R.filter((n) => !!n[1]),
        R.fromPairs,
        R.merge(state)
    )(data)
};

const Concat = (state, data) => {
    return R.concat(state, data)
};

const Append = (state, data) => {
    return R.append(data, state);
};

const RemoveByKey = (state, key, value) => {
    return R.pipe(
        R.groupBy(R.prop(key)),
        R.dissoc(value),
        R.values,
        R.reduce(R.concat, [])
    )(state);
};

const Replace = (state, data = [], key = 'id', sort = 'updated_at', reverse = true) => {
    let r_data = R.pipe(
        R.concat(R.__, data),
        R.groupBy(R.prop(key)),
        R.values,
        R.map(R.reduce(R.merge, {})),
        R.sortBy(R.prop(sort))
    )(state);

    return reverse ? R.reverse(r_data) : r_data;
};

const Clone = (state) => {
    return R.clone(state);
}

export {
    Merge, Concat, Append , RemoveByKey, Replace, Clone
}
