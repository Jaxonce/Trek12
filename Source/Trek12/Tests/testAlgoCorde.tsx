function findPaths(matrix, zones) {
    // Initialize visited matrix with zeros
    const visited = Array.from({ length: 19 }, () => Array.from({ length: 19 }, () => 0));

    // Define recursive function to search for paths
    const search = (i, j, value) => {
      // If the current cell is already visited or belongs to a zone, return
      if (visited[i][j] !== 0 || zones[i][j] !== 0) {
        return;
      }

      // If the current cell has a value, mark it as visited and search recursively for adjacent cells
      if (matrix[i][j] !== 0) {
        visited[i][j] = -1; // Mark as visited
        const adjacentCells = getAdjacentCells(i, j);
        for (const cell of adjacentCells) {
          if (matrix[cell[0]][cell[1]] === value) {
            search(cell[0], cell[1], value);
          }
        }
      }

      // If the current cell doesn't have a value, mark it as visited and search recursively for adjacent cells
      else {
        visited[i][j] = -1; // Mark as visited
        const adjacentCells = getAdjacentCells(i, j);
        for (const cell of adjacentCells) {
          search(cell[0], cell[1], value + Math.min(die1, die2));
        }
      }
    };

    // Define function to get adjacent cells
    const getAdjacentCells = (i, j) => {
      const cells = [];
      if (i > 0) cells.push([i - 1, j]);
      if (j > 0) cells.push([i, j - 1]);
      if (i < 18) cells.push([i + 1, j]);
      if (j < 18) cells.push([i, j + 1]);
      return cells;
    };

    // Define variables for dice values
    const die1 = Math.floor(Math.random() * 6);
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Loop through each cell in the matrix
    for (let i = 0; i < 19; i++) {
      for (let j = 0; j < 19; j++) {
        // Search for paths starting from cells that don't belong to a zone and haven't been visited
        if (zones[i][j] === 0 && visited[i][j] === 0) {
          search(i, j, matrix[i][j]);
        }
      }
    }

    // Return visited matrix with paths marked as -1
    return visited;
  }

function findCordsPaths(graph) {
    const cordsPaths = [];
    const visited = new Set();

    // Fonction auxiliaire récursive pour parcourir le graphe
    function traverse(vertex, path) {
      visited.add(vertex);
      path.push(vertex);

      // Trouver les sommets adjacents non visités
      const adjacents = graph[vertex].filter(
        (v) => !visited.has(v) && !path.includes(v) && !zoneSet.has(v)
      );

      // Ajouter un chemin de corde trouvé à la liste des chemins de corde
      if (path.length > 1 && isCordsPath(path)) {
        cordsPaths.push(path.slice());
      }

      // Appeler récursivement traverse pour chaque sommet adjacent
      for (const adjacent of adjacents) {
        traverse(adjacent, path);
      }

      // Retirer le sommet actuel du chemin pour le backtracking
      path.pop();
      visited.delete(vertex);
    }

    // Appeler traverse pour chaque sommet non visité
    for (const vertex of Object.keys(graph)) {
      if (!visited.has(vertex) && !zoneSet.has(vertex)) {
        traverse(vertex, []);
      }
    }

    return cordsPaths;
  }

  // Graphe de test
  const testGraph = {
    1: [2, 6],
    2: [1, 3, 7],
    3: [2, 4, 8],
    4: [3, 5, 9],
    5: [4, 10],
    6: [1, 7, 11],
    7: [2, 6, 8, 12],
    8: [3, 7, 9, 13],
    9: [4, 8, 10, 14],
    10: [5, 9, 15],
    11: [6, 12, 16],
    12: [7, 11, 13, 17],
    13: [8, 12, 14, 18],
    14: [9, 13, 15, 19],
    15: [10, 14, 20],
    16: [11, 17],
    17: [12, 16, 18],
    18: [13, 17, 19],
    19: [14, 18, 20],
    20: [15, 19],
  };

  const zoneSet = new Set([2, 3, 8, 9, 14, 15]);

  // Trouver les chemins de corde
  const cordsPaths = findCordsPaths(testGraph, zoneSet);

// Afficher les chemins de corde trouvés
console.log(cordsPaths); // Devrait afficher [[1, 2, 3, 4, 5], [1, 6, 7, 8, 9, 10], [6, 11, 12, 13, 14, 15], [11, 16, 17, 18, 19, 20]]

  // Fonction récursive pour chercher les chemins de corde à partir d'une case donnée
  const findCordPaths = (grid, i, j, visited, currPath, cordPaths) => {
    // Vérifier si la case est valide et non visitée
    if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && !visited[i][j]) {
      // Vérifier si la case n'est pas condamnée et n'appartient pas à une zone
      if (grid[i][j] !== -1 && !isInZone(grid, i, j)) {
        // Ajouter la case courante au chemin de corde en cours
        currPath.push([i, j]);
        visited[i][j] = true;

        // Si le chemin de corde en cours a plus d'une case, l'ajouter à la liste des chemins de corde
        if (currPath.length > 1) {
          cordPaths.push([...currPath]);
        }

        // Chercher les chemins de corde dans les cases adjacentes
        findCordPaths(grid, i - 1, j, visited, currPath, cordPaths); // Case au-dessus
        findCordPaths(grid, i + 1, j, visited, currPath, cordPaths); // Case en-dessous
        findCordPaths(grid, i, j - 1, visited, currPath, cordPaths); // Case à gauche
        findCordPaths(grid, i, j + 1, visited, currPath, cordPaths); // Case à droite

        // Retirer la case courante du chemin de corde en cours et la marquer comme non visitée
        currPath.pop();
        visited[i][j] = false;
      }
    }
  };

  // Fonction principale pour chercher tous les chemins de corde dans le graphe
  const findAllCordPaths = (grid) => {
    const cordPaths = []; // Liste de tous les chemins de corde trouvés

    // Parcourir chaque case du graphe
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        const visited = createVisitedArray(grid.length, grid[0].length); // Tableau de cases visitées pour chaque itération

        // Chercher les chemins de corde à partir de la case courante
        const currPath = [];
        findCordPaths(grid, i, j, visited, currPath, cordPaths);
      }
    }

    return cordPaths;
  };

  const isInZone = (grid, i, j) => {
    const value = grid[i][j];
  
    // Parcourir toutes les cases du graphe pour vérifier s'il existe une zone avec la même valeur
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[0].length; y++) {
        if (grid[x][y] === value && isAdjacent(i, j, x, y)) {
          return true;
        }
      }
    }
    return false;
  };

  const isAdjacent = (i1, j1, i2, j2) => {
    return Math.abs(i1 - i2) + Math.abs(j1 - j2) === 1;
  };

  const createVisitedArray = (n, m) => {
    const visited = [];
    for (let i = 0; i < n; i++) {
      visited.push(new Array(m).fill(false));
    }
    return visited;
  };

  const isCordPath = (grid, i, j, visited) => {
    // Si la case est dans une zone, elle ne peut pas être dans un chemin de corde
    if (isInZone(grid, i, j)) {
      return false;
    }
  
    // Si la case a déjà été visitée, on ne la visite pas à nouveau
    if (visited[i][j]) {
      return false;
    }
  
    // Marquer la case comme visitée
    visited[i][j] = true;
  
    // Vérifier si la case est entourée de deux cases adjacentes sur le même axe
    if ((i > 0 && i < grid.length - 1) && (grid[i-1][j] !== null && grid[i+1][j] !== null && !visited[i-1][j] && !visited[i+1][j])) {
      return true;
    }
  
    if ((j > 0 && j < grid[0].length - 1) && (grid[i][j-1] !== null && grid[i][j+1] !== null && !visited[i][j-1] && !visited[i][j+1])) {
      return true;
    }
  
    // Appeler récursivement la fonction pour les cases adjacentes non visitées
    if (i > 0 && grid[i-1][j] !== null && !visited[i-1][j]) {
      if (isCordPath(grid, i-1, j, visited)) {
        return true;
      }
    }
  
    if (j > 0 && grid[i][j-1] !== null && !visited[i][j-1]) {
      if (isCordPath(grid, i, j-1, visited)) {
        return true;
      }
    }
  
    if (i < grid.length - 1 && grid[i+1][j] !== null && !visited[i+1][j]) {
      if (isCordPath(grid, i+1, j, visited)) {
        return true;
      }
    }
  
    if (j < grid[0].length - 1 && grid[i][j+1] !== null && !visited[i][j+1]) {
      if (isCordPath(grid, i, j+1, visited)) {
        return true;
      }
    }
  
    // Si la case ne peut être ajoutée à aucun chemin de corde, retourner false
    return false;
  };
  
  