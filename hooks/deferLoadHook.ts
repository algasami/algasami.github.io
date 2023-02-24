import { useState } from "react";

export const useDeferLoadHook = () => {
	const [isReady, setIsReady] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	return { isReady, setIsReady, isLoading, setIsLoading };
};
