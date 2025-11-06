export const useWp = () => {
  const { locale } = useI18n();
  const loading = useState('wp-loading', () => false);
  const error = useState<any>('wp-error', () => null);

  // Define types for GraphQL responses
  type GraphQLResponse = {
    data?: {
      [key: string]: {
        edges: Array<{
          node: any;
        }>;
      };
    };
    errors?: Array<{
      message: string;
    }>;
  };

  /**
   * Get a collection of pages, questions, or posts with proper SSR support
   */
  const getCollection = (
    collectionType: 'pages' | 'questions' | 'posts',
    withBlocks = false,
    options: {
      limit?: number;
      filter?: Record<string, any>;
      language?: string;
    } = {}
  ) => {
    // Use the current locale if language not specified
    const langToUse = options.language || locale.value;

    // Build query params
    const queryParams: Record<string, string> = {
      type: collectionType,
      withBlocks: withBlocks.toString(),
      language: langToUse,
    };

    // Add limit if specified
    if (options.limit) {
      queryParams.limit = options.limit.toString();
    }

    // Add filter parameters
    if (options.filter) {
      for (const [key, value] of Object.entries(options.filter)) {
        if (value !== undefined) {
          queryParams[key] = value.toString();
        }
      }
    }

    // Generate a unique key for caching
    const key = `wp-collection-${collectionType}-${JSON.stringify(queryParams)}`;

    // Use useAsyncData for proper SSR support
    return useAsyncData<GraphQLResponse>(
      key,
      () => $fetch('/api/content/collection', { query: queryParams }),
      {
        server: true,
        lazy: false,
        immediate: true,
      }
    );
  };

  /**
   * Get a single item by slug with proper SSR support
   */
  const getItemBySlug = (
    collectionType: 'pages' | 'questions' | 'posts',
    slug: string,
    language?: string
  ) => {
    // Use the current locale if language not specified
    const langToUse = language || locale.value;

    // Generate a unique key for caching
    const key = `wp-item-${collectionType}-${slug}-${langToUse}`;

    // Use useAsyncData for proper SSR support
    return useAsyncData(
      key,
      () =>
        $fetch('/api/content/item', {
          query: {
            type: collectionType,
            slug,
            language: langToUse,
          },
        }),
      {
        server: true,
        lazy: false,
        immediate: true,
      }
    );
  };

  return {
    getCollection,
    getItemBySlug,
    loading,
    error,
  };
};
