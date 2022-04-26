import { useEffect, useState } from "react";
import { getTrendings } from "services/TrendingsService.js";

export default function useTrendings() {
    const [loading, setLoading] = useState(false);
    const [trendings, setTrendings] = useState([]);

    useEffect(function () {
        setLoading(true);
        getTrendings()
            .then((trends) => {
                setTrendings(trends);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { trendings, loading };
}
