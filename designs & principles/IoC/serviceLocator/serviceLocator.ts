class ServiceLocator {
    private _map = new Map<symbol, unknown>()
    get<T>(s: symbol): T {
        return this._map.get(s) as T ?? throw new Error('Unable to locate service.')
    }

    add(s: symbol, instance: {}) {
        if (this._map.has(s)) {
            throw new Error('Service already registered for that symbol.')
        }

        this._map.set(s, instance)
    }

    clear() {
        this._map.clear()
    }
}

const serviceLocator = new ServiceLocator

export default serviceLocator
