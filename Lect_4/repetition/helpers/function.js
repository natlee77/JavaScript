//function GUID varianty C#--generate uuid
//+export
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var result = Math.random() * 16 | 0, value = c == 'x' ? result : (result & 0x3 | 0x8);
        return value.toString(16);
    });
}