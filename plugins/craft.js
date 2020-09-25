export default function ({ $config, $http, query }, inject) {
    const $craft = function (slug) {
        return $http.$get(`/${slug}.json${this.query}`).then(data => data.data);
    };

    inject('craft', $craft.bind({
        query: $config.livePreview && query.token ? '?token=' + query.token : '',
    }));
}