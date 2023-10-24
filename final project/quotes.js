export const getQuotes = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  
  