export function createSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
}

// converting the capacities to proper form
export const removePlus = (data: string) => {
    return data.replace(/\+/g, '')
}

export const dataConvert = (data: string[]) => {
    return data.map(removePlus)
} 

export const handleRefresh = () => {
    window.location.href = "/"; // Forces a full page reload
  };