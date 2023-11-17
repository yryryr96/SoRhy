using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NoteManager : MonoBehaviour
{
    public int bpm = 0;
    double currentTime = 0d;

    [SerializeField] Transform tfNoteAppear = null;

    TimingManager theTimingManager;
    EffectManager theEffectManager;
    ComboManager theComboManager;

    void Start()
    {
        theTimingManager = FindObjectOfType<TimingManager>();
        theEffectManager = FindObjectOfType<EffectManager>();
        theComboManager = FindObjectOfType<ComboManager>();

        StartCoroutine(GenerateNotes());
    }

    public void Notes()
    {
        currentTime += 60d / bpm;
        GameObject t_note = ObjectPool.instance.noteQueue.Dequeue();
        t_note.transform.position = tfNoteAppear.position;
        t_note.SetActive(true);
        theTimingManager.boxNoteList.Add(t_note);
    }

    IEnumerator GenerateNotes()
    {
        List<float> beatInfo = new List<float>
        {
            128, 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96,  // 2
            256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 4
            256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 6
            256, 256, 256, 256, 128, 128, 256, 112, 128, 96, // 8
            128, 128, 128, 128, 128, 128, 128, 128,// 10
            128, 128, 128, 128, 128, 128, 128, 128, // 12
            256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, // 14
            512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 128, 256, 128, 128, 96, // 16
            // 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 18
            // 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 20
            // 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 22
            // 256, 256, 256, 256, 128, 128, 256, 112, 128, 96, // 24
            // 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 96, // 26
            // 256, 256, 256, 256, 128, 256, 256, 256, 256, 128, 256, 128, // 28
            // 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, 256, // 30
            // 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 512, 128, 256, 128, 128, 256, // 32
            // 32, 32, // 34
            // 32, 96, 256, 256, 256, 256, 256, // 36
        };

        for (int i = 0; i < beatInfo.Count; i++)
        {
            Notes();
            yield return new WaitForSeconds((float)(60d / beatInfo[i]));
        };

        yield return new WaitForSeconds(5f);
        SceneManager.LoadScene("Result");
    }


    // Update is called once per frame
    // void Update()
    // {
    //     currentTime += Time.deltaTime;

    //     if (currentTime >= 60d / bpm)
    //     {
    //         GameObject t_note = ObjectPool.instance.noteQueue.Dequeue();
    //         t_note.transform.position = tfNoteAppear.position;
    //         t_note.SetActive(true);
    //         theTimingManager.boxNoteList.Add(t_note);
    //         currentTime -= 60d / bpm;
    //     }
    // }


    // 노트 파괴
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.CompareTag("Note"))
        {
            if (collision.GetComponent<Note>().GetNoteFlag())
            {
                theTimingManager.MissRecord();
                theEffectManager.JudgementEffect(4);
                theComboManager.ResetCombo();
            }

            theTimingManager.boxNoteList.Remove(collision.gameObject);
            
            ObjectPool.instance.noteQueue.Enqueue(collision.gameObject);
            collision.gameObject.SetActive(false);
        }
    }
}
