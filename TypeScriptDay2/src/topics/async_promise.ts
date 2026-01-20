export const asyncpromise = () => {
    // ตัวอย่างการสร้างฟังก์ชั่นที่มีการคืนค่าแบบ promise
    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
        // Pending สถานะที่ยังไม่สำเร็จ
        console.log("เริ่มต้นทำงาน Promise - สถานะ Pending")
        return new Promise<string>((resolve, reject) => {
            // จำลองการเชื่อมต่อเครือข่าย ต้องใช้เวลา 2 วินาที
            setTimeout(() => {
                if (shouldSuccess) {
                    console.log("การทำงานสำเร็จ - สถานะ Fulfilled")
                    resolve("สำเร็จ ได้รับข้อมูลมาแล้ว")
                } else {
                    console.log("การทำงานล้มเหลว - สถานะ Rejected")
                    reject(new Error("ล้มเหลว ไม่สามารถเชื่อมต่อเซิฟเวอร์ได้"))
                }
            }, 2000)
        })
    }
    // simulateNetworkRequest(true)
    // simulateNetworkRequest(false)
    function promiseChainExample(): void {
        simulateNetworkRequest(true)
            .then((result) => {
                console.log('ข้อมูลที่ได้รับ:', result)
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาด:', error)
            })
            .finally(() => {
                console.log('จบการทำงาน')
            })
    }

    promiseChainExample()
}
