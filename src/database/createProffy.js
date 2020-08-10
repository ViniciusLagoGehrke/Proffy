module.exports = async function (db, { proffyValue, classValue, classScheduleValue }) {
    // inserir dados na tabela de teachers
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // inserir dados na tabela de classes

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classvalue.subject}",
                "${classvalue.cost}",
                "${proffy.id}"
            );
    `)

    const class_id = insertedClass.lastID

    //Inserir dados na tabela class_schedule 

    const insertedAllClassScheduleValues = classScheduleValues.map(value) => {
        return db.run(`
        INSERT INTO class_schecule (
            class_id,
            weekday,
            time_from,
            time_to
        ) VALUES (
            "${class_id}",
            "${classScheduleValue.weekday}",
            "${classScheduleValue.time_from}",
            "${classScheduleValue.time_to}"
        );
      `)
    })

    //executar todos db.runs() das classes schedules
    await Promise.all(insertedAllClassScheduleValues)
}