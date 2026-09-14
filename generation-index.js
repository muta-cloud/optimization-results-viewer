function buildGenerationIndex(datasets) {
  const index = new Map();

  datasets.forEach(dataset => {
    const byGeneration = new Map();

    dataset.gen.forEach((generation, rowIndex) => {
      let rowIndices = byGeneration.get(generation);
      if (!rowIndices) {
        rowIndices = [];
        byGeneration.set(generation, rowIndices);
      }
      rowIndices.push(rowIndex);
    });

    index.set(dataset.id, byGeneration);
  });

  return index;
}
